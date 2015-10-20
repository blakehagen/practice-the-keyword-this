//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      
      binding

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      
      implicit binding
      explicit binding
        - call
        -apply
        -bind
      new binding
      default binding
      
In JavaScript, the thing called this, is the object that "owns" the JavaScript code.
The value of this, when used in a function, is the object that "owns" the function.
The value of this, when used in an object, is the object itself.
The this keyword in an object constructor does not have a value. It is only a substitute for the new object.
The value of this will become the new object when the constructor is used to create an object.
Note     Note that this is not a variable. It is a keyword. You cannot change the value of this.
      
      

  // 3) What is the difference between call and apply?

      //Answer
      
      apply uses an array to pass in parameters, instead of just passing them into the function. 

  // 4) What does .bind do?

      //Answer
      .bind allows you to set the "this" value on methods.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    
    var user = {
      username: "Blake",
      email: "me@me.com",
      getUserName: function(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUserName();
//returns --> "Blake"


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  
  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      this.move += 10;
      return this.move;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
  
getYear.call(prius); // --> returns 2011
getYear.call(mustang); // --> returns 2013



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  
  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  
  the window object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is run.

setTimeout(getUsername.bind(user), 5000); // returns --> "iliketurtles" (after 5 sec)


