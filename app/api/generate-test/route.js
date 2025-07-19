import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Read the request body to get parameters from the frontend
    const {requestData,Category,startTime} = await request.json();
    console.log('Received test generation request with data:', requestData,Category,startTime);

    // TODO: Implement actual test generation logic here
    // Use requestData (e.g., requestData.subject, requestData.selectedTopics) to generate the test.
    // For now, returning the hardcoded sample data.

    const sampleData = [
        {
          id:6,
          type:"mcq",
          question: "The quadratic formula is given by:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
          topic: "Mathematics",
          options: [
            { text: "Option 1", isCorrect: false },
            { text: "Option 2", isCorrect: true },
            { text: "Option 3", isCorrect: false },
            { text: "Option 4", isCorrect: false },
          ],
          solution: "This is a placeholder solution for the question: Another question?",
        },
        {
          id:8,
          type:"long answer",
          question: "Another question?",
          topic: "Science",
          solution: "This is a placeholder solution for the question: Another question?",
        },
        {
          id:9,
          type:"fill in the blanks",
          question: "Fill in the ______ question?",
          topic: "History",
        solution: "This is a placeholder solution for the question: Another question?",
        },
        {
          id: 99,
          type: "mcq",
          question: `Scientific notation (LaTeX): $5 \\times 10^{-7}$\n\nChemical formula (LaTeX): $H_2O$\n\nChemical formula (HTML): H<sub>2</sub>O\n\nImage (Markdown): ![Test](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s)\n\nImage (HTML): <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s\" alt=\"Test image\" />\n\nSuperscript (HTML): Fe<sup>2+</sup>`,
          topic: "Rendering Test",
          options: [
            { text: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="HTML Image 1" />', isCorrect: false },
            { text: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png" alt="HTML Image 2" />', isCorrect: true },
            { text: '![Latex Image 1](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s)', isCorrect: false },
            { text: '![Latex Image 2](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png)', isCorrect: false },
          ],
          solution: "This is a test question to verify rendering of LaTeX, HTML, and images.",
        }
      ];

    // Return the generated test data in the expected format
    return NextResponse.json({sampleData});
  } catch (error) {
    console.error('Error in test generation API route:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate test', error: error.message },
      { status: 500 }
    );
  }
}
