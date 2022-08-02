// Blog Rendering Tool

//blog list
const bloglist = ['blog/ExampleOne.html', 'blog/ExampleTwo.html', 'blog/ExampleThree.html'];
//reads blog posts and stores them in variable
async function getBlogPost(url, _callback) {
	// fetches blog post
	const response = await fetch(url);
	// stores in variable
	var post = await response.text();	
	// renders post on website
	show(post);
	_callback();
}

//renders html
function show(data) {
	// makes a div for the blog post
	var post = document.createElement('div');
	post.className = "blogblock";
	// adds div to parent
	document.getElementById('blogger').appendChild(post);
	// writes blog text to div
	post.innerHTML = data;
}

//renders blog
function writeBlog () {
	// loops for number of blog posts
	for (let step = 0; step < bloglist.length; step++) {
		// Writes blog posts from list
		getBlogPost(bloglist[step], ()=>{
			setTimeout(() => { console.log("Blog", step, "rendered"); }, 50);
		});
	  }  
}


writeBlog(bloglist)
