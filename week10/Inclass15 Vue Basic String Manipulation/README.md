# Inclass15: Vue Basic: String Manipulation

## Due yesterday at 11:59 PMCloses tomorrow at 11:59 PM

### Instructions

- Please submit your javascript code and html code togetther in a text file and name your file as studentid.txt 
- For example 6123456.txt

---
## **Exercise 1** Implement a "upfirst" filter which transforms the first character of ach word to uppercase. Use this filter to transform the paragraph's title with the v-bind directive. 

HINT: Use Javascript's "split" function to split the message into words. 
```js
  hello world! ==> Hello World!
```

---
## **Exercise 2** Apply the filter from the first exercise to the below paragraph. Then implement a filter which removes any spaces and chain these two filters together 
```js
  hello world!  ==> HelloWorld! 
```
sending by this form
```jsx
//HTML 
<script src="https://unpkg.com/vue@next"></script> 
<div id = "data" class="demo"> 
  <p >{{message}}</p>
   <p>{{message}}</p> 
</div> 

//VueJS 
const App = { 
  data() { 
    return { message: 'hello world!' } 
  }, 
} 

Vue.createApp(App).mount('#data')
```
# Answer (Using JSBIN)
## HTML
```HTML
<script src="https://unpkg.com/vue@next"></script>
<div id="data" class="demo">
  <p>{{message}}</p>
  <p>{{uppercase(ex1)}}</p>
  <p>{{uppercase(ex2,'')}}</p>
</div>
```
## JS
```JS
const App = {
  data() {
    return {
      message: "this is message!",
      ex1: "this is titlecased message!",
      ex2: "this is titlecased message without space!",
    };
  },
  methods: {
    uppercase: function (word = "", separator = " ") {
      return word
        .toString()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(separator);
    },
  },
};

Vue.createApp(App).mount("#data");

```
## Output
```
this is message!

This Is Titlecased Message!

ThisIsTitlecasedMessageWithoutSpace!
```



