## Some notes
How to use dom-testing-utils
1. getBy is for getting the data that is present in the dom, throws error if there's no that element. This is good for asserting the component that should be on the dom
2. queryBy is the same as getBy, but returns null instead of throwing error. This is good for checking whether a component is rendered
3. findBy is getBy but returns a promise instead, which will resolve to the element when it's found after 4500 ms and resolves to rejected if not.

The purpose of flush-promises is to wait out all the promise to be resolved before continuing. In the app, when it's first mounted, it does an async call. In the test, when it's first mounted, it will also run the async call but it won't wait out the promise to be resolved, hence the `null` value of `posts` in HomePage. To "apply await" on all async requests, use flush-promise. With flush promise, the request are waited our first, then it will run the next thing. This also applies to jest mock, apparently it's not fully synchronous.

Testing router link only works if we're rendering the whole thing (the root of the app, in Vue's case, it's App.vue). Testing router link on the sub-component of the root won't work because there's no router-view there. This means to test vue router, we need to render the component that has router-view inside.

In my case, router-link doesn't work in HomePage.spec.js because it doesn't have router-view inside, the test needs to be placed in App.spec.js