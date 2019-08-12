# isle
Immersive secondary language education (isle)


## Problem
The most effective form of foreign language pedagogy is studying abroad. This however can be prohibitive for many reasons e.g. cost of airfare, language schools and accommodation. How can we use current technology to simulate the immersive experience of being abroad, whilst being a cheaper and more accessible alternative?


## Implementation
Mobile phones are now capable of facilitating VR experiences. Frameworks such as three.js make it easier to create engaging 3D experiences using WebGL. Other frameworks such as React Native and tools like expo are able to use the underlying OpenGL technology in mobile GPUs.

The idea is to allow learners to create their own VR environment. These VR environments are specific in scope and context. We provide them with a store of miscellaneous 3D models from which they can create environments related to a particular topic. This is similar to how students currently learn languages from textbooks where each chapter relates to a particular topic; or a deck of flash cards which all fall under a common semantic category. The idea of VR environments takes traditional methods such as the above and "immersifies" them.

An added benefit of this is that the user's interactions with the application can be tracked and monitored for performance analytics. They can track how many and how well they've employed certain phrases and grammar structures within a particular context. This data can have a plethora of uses. Apart from allowing the user to track their own language patterns, they can share these with teachers/tutors to communicate their language proficiency more accurately. This also helps language instructors tailer lessons according to the student's language skill level.
	

## Technology
	- React/Redux
	- Node
	- GraphQL
	- mongoDB

## Challenges
	- Grasping the core differences between developing in 2D vs. 3D
	- Trying to reduce the number of unnecessary computations each tick to improve FPS e.g. adding and removing event listeners when needed
	- Developing for different mobile devices

## Further work
	- Creating more 3D models on Blender to increase the variety of possible rooms you can build
 	- Displaying user analytics about the words, grammar and expressions used inside each VR environment
	- Fine-tuning the VR user experience 
