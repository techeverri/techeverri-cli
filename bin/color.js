const falseValues = /^(0|false)$/i;

export function shouldUseColor(env = process.env, stdout = process.stdout) {
  if (env.FORCE_COLOR !== undefined) {
    return !falseValues.test(env.FORCE_COLOR);
  }

  if (env.NO_COLOR) {
    return false;
  }

  if (env.TERM === "dumb") {
    return false;
  }

  return Boolean(stdout.isTTY);
}
