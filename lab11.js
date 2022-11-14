// declaring a variable named text
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

// declare an array named words, containing each word
//from the text split apart at the spaces
let words = text.split(" ");

// Make words all lowercase by using the map function to 
//apply the toLowerCase function to every value
//in the words array
words = words.map( word => word.toLowerCase() );

//Replace all periods and commas with empty strings
words = words.map( function(word){
    return word
        .replaceAll(".", "")    // 💬
        .replaceAll(",", "");   // 💬
});

// Declare an empty object 
let lookup = {};

// Loop through all the words 
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    // Returns the character at the specified index in a string.
    let firstLetter = word.charAt(0);

    // If the lookup does not have an array for the first letter
    //make an array named firstLetter 
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    //Adds words to the firstLetter array
    lookup[firstLetter].push(word);
}

// The for loops is used to check if the firstLetter is in the object lookup. 
// It returns a boolean value.
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // The filter function creates a new array, using the index.Of function and returns the first index at which a given element 
   //can be found in the array, or -1 if it is not present.
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // Sorting out the words in the entry array
   entry = entry.sort();

   // first value of lookup is reassigned for the new entry
   lookup[firstLetter] = entry;
}

// Uses a for loop to sort the property names in the lookup object and returns it.
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
