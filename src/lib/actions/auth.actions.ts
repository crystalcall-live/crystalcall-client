export async function signUpWithCredentials(
  params: AuthCredentials
): Promise<any> {
  console.log(params);
  try {
    return { success: true };
  } catch (error) {
    console.error(error);
  } finally {
    return;
  }
}

export async function signInWithCredentials(
  params: Pick<AuthCredentials, 'email' | 'password'>
): Promise<any> {
  console.log(params);
  try {
    return { success: true };
  } catch (error) {
    console.error(error);
  }
}
