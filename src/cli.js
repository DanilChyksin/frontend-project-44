import readlineSync from 'readline-sync'
const startApp = () => {
  const name = readlineSync.question('Your name?: ')
  console.log(`Welcome to the brain Games! Mr ${name}`)
}
export { startApp }
