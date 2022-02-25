import {
  CACHE_HELP_URL,
  PRIVACY_POLICY_URL,
  ANALYTICS_ENABLED,
  AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_IDENTITY_POOL_REGION,
  AWS_PINPOINT_APPLICATION_ID,
  AWS_PINPOINT_REGION,
  HELP_URL,
  TERMS_AND_CONDITIONS_VERSION,
  TRUSTED_ISSUER_LIST,
  VERSION_CHECK_ENABLED,
  VERSION_CHECK_LASTCHECK_MAX_AGE_MS,
  VERSION_CHECK_LASTCHECK_MIN_AGE_MS,
  VERSION_CHECK_POLICY,
  VERSION_CHECK_PROVIDER_URL_OVERRIDE,
  VERSION_CHECK_INITIAL_REQUEST_TIMEOUT_MS,
  VERSION_CHECK_REQUEST_TIMEOUT_MS,
  VERSION_CHECK_UPDATE_URL_OVERRIDE,
  ISSUER_CACHE_MAX_AGE_MS,
  ISSUER_CACHE_REFRESH_MIN_AGE_MS,
  ISSUER_RESOLUTION_REQUEST_TIMEOUT_MS,
} from "@env";

const parseBoolean = (v: string): boolean => {
  return /^true$/i.test(v);
};

const parseOptional = (v: string): string | undefined => {
  return v.trim().length > 0 ? v : undefined;
};

export const config = {
  HELP_URL: HELP_URL,
  CACHE_HELP_URL: CACHE_HELP_URL,
  PRIVACY_POLICY_URL: PRIVACY_POLICY_URL,
  TERMS_AND_CONDITIONS_VERSION: Number(TERMS_AND_CONDITIONS_VERSION),

  TRUSTED_ISSUER_LIST: parseOptional(TRUSTED_ISSUER_LIST)?.split(","),
  VERSION_CHECK_ENABLED: parseBoolean(VERSION_CHECK_ENABLED),
  VERSION_CHECK_POLICY,
  VERSION_CHECK_INITIAL_REQUEST_TIMEOUT_MS: parseInt(VERSION_CHECK_INITIAL_REQUEST_TIMEOUT_MS, 10),
  VERSION_CHECK_REQUEST_TIMEOUT_MS: parseInt(VERSION_CHECK_REQUEST_TIMEOUT_MS, 10),
  VERSION_CHECK_LASTCHECK_MIN_AGE_MS: parseInt(VERSION_CHECK_LASTCHECK_MIN_AGE_MS, 10),
  VERSION_CHECK_LASTCHECK_MAX_AGE_MS: parseInt(VERSION_CHECK_LASTCHECK_MAX_AGE_MS, 10),
  VERSION_CHECK_PROVIDER_URL_OVERRIDE: parseOptional(VERSION_CHECK_PROVIDER_URL_OVERRIDE),
  VERSION_CHECK_UPDATE_URL_OVERRIDE: parseOptional(VERSION_CHECK_UPDATE_URL_OVERRIDE),

  ISSUER_CACHE_MAX_AGE_MS: parseInt(ISSUER_CACHE_MAX_AGE_MS, 10),
  ISSUER_CACHE_REFRESH_MIN_AGE_MS: parseInt(ISSUER_CACHE_REFRESH_MIN_AGE_MS, 10),
  ISSUER_RESOLUTION_REQUEST_TIMEOUT_MS: parseInt(ISSUER_RESOLUTION_REQUEST_TIMEOUT_MS, 10),

  ANALYTICS_ENABLED: parseBoolean(ANALYTICS_ENABLED),
  AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_IDENTITY_POOL_REGION,
  AWS_PINPOINT_APPLICATION_ID,
  AWS_PINPOINT_REGION,
};
