const redirectToLogin = async (previousRoute?: string) => {
  const params: Record<string, any> = { pathname: "/login" };
  if (previousRoute) {
    params.query = { previousRoute };
  }
  //TODO: fazer alguma coisa
};

export default redirectToLogin;
