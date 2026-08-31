import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8443/",
    realm: "KOto",
    clientId: "koto-react",
});

export default keycloak;