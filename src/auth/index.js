import store from "../store";
import createAuth0Client from "@auth0/auth0-spa-js";

let auth0Client;
let token;
let userInfo;

const getAuthClient = async () => {
  if (store.getters["main/authClient"]) {
    return store.getters["main/authClient"];
  }
  return await createAuth0Client({
    domain: "dev-pl4nvj1n.us.auth0.com",
    client_id: "yV44C1L34bF3paYCVnjjl7UBBylwZcnc",
    redirect_uri: "http://localhost:3000/",
    audience: "organic-recipe-hasura",
    // redirect_uri: import.meta.VITE_DOMAINURL_REDIRECT,
  });
};

export const signIn = async () => {
  store.dispatch("main/setAuthLoadingStatus", true);
  auth0Client = await getAuthClient();
  store.dispatch("main/setAuthClient", auth0Client);
  try {
    await auth0Client.loginWithPopup({});

    const userData = await auth0Client.getUser();
    localStorage.setItem("user", JSON.stringify(userData));
    store.dispatch("main/setUser", userData);
    store.dispatch(
      "main/setUserAuthenticated",
      await auth0Client.isAuthenticated()
    );
    store.dispatch("main/setAuthLoadingStatus", false);
    token = await auth0Client.getTokenSilently();
    userInfo = await auth0Client.getUser();
    console.log(userInfo.sub);
    console.log(token, "this is token");
  } catch (e) {
    console.error(e);
  }
};

export const signOut = async () => {
  return auth0Client.logout();
};

export const authGuard = async function (to, from, next) {
  store.dispatch("main/setAuthLoadingStatus", true);

  auth0Client = await getAuthClient();
  store.dispatch("main/setAuthClient", auth0Client);

  console.log(await auth0Client.getTokenSilently());

  if (await auth0Client.isAuthenticated()) {
    console.log("User is authenticated");
    const userData = await auth0Client.getUser();
    store.dispatch("main/setUser", userData);
    store.dispatch("main/setAuthLoadingStatus", true);
    store.dispatch("main/setUserAuthenticated", false);
    return next();
  } else {
    console.log("User not authenticated >> redirect to login");
    store.dispatch("main/setUser", null);
    store.dispatch("main/setAuthLoadingStatus", false);
    store.dispatch("main/setUserAuthenticated", false);
    return next("/login");
  }
};

//   ===================== APOLLO ==============================

import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { createApolloProvider } from "@vue/apollo-option";
import { createHttpLink } from "@apollo/client";

let apolloClient;

if (store.getters["main/isLoading"] === false) {
  const httpLink = createHttpLink({
    uri: "http://localhost:8080/v1/graphql",
  });

  const authLink = setContext(async () => {
    if (await auth0Client.isAuthenticated()) {
      const token = await auth0Client.getTokenSilently();
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }else{
        return {}
    }
  });

  const cache = new InMemoryCache();
  apolloClient = new ApolloClient({
      cache,
      link: authLink.concat(httpLink),
  })
}


export const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
    abebe: signIn().userData,
})