export function hidePassword(password) {
  const array = [];

  for (let i = 0; i < password.length; i++) {
    array.push('*');
  }

  return array.join('');
}