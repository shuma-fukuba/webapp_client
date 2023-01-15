export const config = {
    region: String(process.env.NEXT_PUBLIC_AWS_REGION),
    userPoolId: String(process.env.NEXT_PUBLIC_LARAVEL_AWS_COGNITO_USER_POOL_ID),
    userPoolWebClientId: String(
      process.env.NEXT_PUBLIC_LARAVEL_AWS_COGNITO_CLIENT_ID
    ),
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  }
