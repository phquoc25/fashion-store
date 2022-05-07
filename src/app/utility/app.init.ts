import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080/auth',
                realm: 'fashion-store',
                clientId: 'fashion-store-client',
            },
            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25,
            },
        });
}