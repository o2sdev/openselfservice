export async function signOut(onRedirect: (url: string) => void, redirectTo: string, _idToken: string) {
    onRedirect(redirectTo);
}
