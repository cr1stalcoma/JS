// Write a function "greet" that returns "hello world!"

const hello = "hello world!"

function greet () {
    setTimeout(() => {
        return console.log(`${hello}`)
    }, 2555)
}

greet();

/* OR
function greet () {
  hello = "hello world!";
  return hello;
}

greet();

 */