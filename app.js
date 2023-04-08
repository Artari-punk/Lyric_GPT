// Load the JSON file
fetch("output.json")
  .then((response) => response.json())
  .then((json) => {
    // Get the select elements from the DOM
    const EmotionSelect = document.getElementById("Emotion");
    const toneSelect = document.getElementById("tone");
    const ambientSelect = document.getElementById("ambient");
    const structureSelect = document.getElementById("structure");
    const styleSelect = document.getElementById("style");
    const endingStyleSelect = document.getElementById("ending-style");
    const pointOfViewSelect = document.getElementById("point-of-view");
    const musicalitySelect = document.getElementById("musicality");
    const audienceSelect = document.getElementById("audience");
    const rhymeSchemeSelect = document.getElementById("rhyme-scheme");
    const poeticFeetSelect = document.getElementById("poetic-feet");
    const inspirationBySelect = document.getElementById("inspiration-by");

    // Add default options to the select elements
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "-- Select an option --";
    EmotionSelect.add(defaultOption);
    toneSelect.add(defaultOption.cloneNode());
    ambientSelect.add(defaultOption.cloneNode());
    structureSelect.add(defaultOption.cloneNode());
    styleSelect.add(defaultOption.cloneNode());
    endingStyleSelect.add(defaultOption.cloneNode());
    pointOfViewSelect.add(defaultOption.cloneNode());
    musicalitySelect.add(defaultOption.cloneNode());
    audienceSelect.add(defaultOption.cloneNode());
    rhymeSchemeSelect.add(defaultOption.cloneNode());
    poeticFeetSelect.add(defaultOption.cloneNode());
    inspirationBySelect.add(defaultOption.cloneNode());

    // Populate the select elements with options from the JSON file
    json.forEach((item) => {
      // Emotion
      if (item.Emotion !== null) {
        const option = document.createElement("option");
        option.textContent = item.Emotion;
        EmotionSelect.appendChild(option);
      }

      // Tone
      if (item.Tone !== null) {
        const option = document.createElement("option");
        option.textContent = item.Tone;
        toneSelect.appendChild(option);
      }

      // ambient
      if (item.Ambient !== null) {
        const option = document.createElement("option");
        option.textContent = item.Ambient;
        ambientSelect.appendChild(option);
      }

      // Structure
      if (item.Structure !== null) {
        const option = document.createElement("option");
        option.textContent = item.Structure;
        structureSelect.appendChild(option);
      }

      // Style
      if (item.Style !== null) {
        const option = document.createElement("option");
        option.textContent = item.Style;
        styleSelect.appendChild(option);
      }

      // Ending Style
      if (item["Ending Style"] !== null) {
        const option = document.createElement("option");
        option.textContent = item["Ending Style"];
        endingStyleSelect.appendChild(option);
      }

      // Point of View
      if (item["Point of View"] !== null) {
        const option = document.createElement("option");
        option.textContent = item["Point of View"];
        pointOfViewSelect.appendChild(option);
      }
      if (item.Musicality !== null) {
        const option = document.createElement("option");
        option.textContent = item.Musicality;
        musicalitySelect.appendChild(option);
      }

      // Audience
      if (item.Audience !== null) {
        const option = document.createElement("option");
        option.textContent = item.Audience;
        audienceSelect.appendChild(option);
      }

      // Rhyme Scheme
      if (item["Rhyme Scheme"] !== null) {
        const option = document.createElement("option");
        option.textContent = item["Rhyme Scheme"];
        rhymeSchemeSelect.appendChild(option);
      }

      // Poetic Feet
      if (item["Poetic Feet"] !== null) {
        const option = document.createElement("option");
        option.textContent = item["Poetic Feet"];
        poeticFeetSelect.appendChild(option);
      }

      // Inspiration by
      if (item["Inspiration by"] !== null) {
        const option = document.createElement("option");
        option.textContent = item["Inspiration by"];
        inspirationBySelect.appendChild(option);
      }
    });
    const connectButton = document.getElementById("connect-button");
    connectButton.addEventListener("click", async () => {
      // Get the API key from the input field
      const apiKey = document.getElementById("api-key-input").value;

      // Check if the API key is valid by making a request to the API
      try {
        const response = await fetch("https://api.openai.com/v1/models", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        });
        const data = await response.json();
        console.log(data);
        const connectionStatus = document.getElementById("connection-status");
        connectionStatus.textContent = "Connected to OpenAI API.";
        connectionStatus.style.color = "green";
      } catch (error) {
        const connectionStatus = document.getElementById("connection-status");
        connectionStatus.textContent =
          "Failed to connect to OpenAI API. Please check your API key.";
      }
    });

    // Handle form submission
    const form = document.querySelector("form");

    // Handle connect button click

    // handle submission
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Get the selected values
      const topic = document.getElementById("topic-input").value;
      const emotion = EmotionSelect.value;
      const tone = toneSelect.value;
      const ambient = ambientSelect.value;
      const structure = structureSelect.value;
      const style = styleSelect.value;
      const endingStyle = endingStyleSelect.value;
      const pointOfView = pointOfViewSelect.value;
      const musicality = musicalitySelect.value;
      const audience = audienceSelect.value;
      const rhymeScheme = rhymeSchemeSelect.value;
      const poeticFeet = poeticFeetSelect.value;
      const inspirationBy = inspirationBySelect.value;

      // Construct the prompt based on the selected values
      const prompt = `Create a song lyric by incorporating Theme os song is a ${topic} in ${pointOfView} rule of write lyric  following elements this is important of lyric story , each serving a specific purpose: 
      for Emotion ${emotion}  Convey the feeling  that you want audient listen lyric the lyrics to express, such as love, sadness, or joy relate with ${topic}. 
      for Tone: ${tone}  refers to the overall mood or emotional quality conveyed by the words of the song. It can be described as the attitude or feeling that the lyrics evoke in the listener. The tone of a music lyric can vary widely, depending on the subject matter, the genre of the music, and the intended emotional effect.
      For example, the tone of a love song might be romantic and dreamy, while the tone of a protest song might be angry and passionate. A sad song might have a melancholy or mournful tone, while a happy song might have an upbeat and celebratory tone.
      The tone of a music lyric is often conveyed through the use of specific words, phrases, and ambient, as well as the melody and rhythm of the music itself. It is an important element in creating a compelling and emotionally resonant song.
      for ambient  use ${ambient}Ambient setting, in the context of storytelling, refers to the overall atmosphere or mood of the environment in which the story takes place. It includes the physical location, time of day, weather conditions, and other sensory details that create a specific tone or feeling for the reader or listener.
      For example, if a story takes place in a dark and ominous forest at night, the ambient setting would be eerie and foreboding. The rustling of leaves, the howling of wolves, and the creaking of tree branches would contribute to the overall atmosphere of danger and mystery.
      Alternatively, a story set on a sunny beach on a summer day would have a more relaxed and carefree ambient setting. The sound of waves crashing, the warmth of the sun, and the smell of saltwater and sunscreen would create a sense of leisure and tranquility.
      Ambient setting is an important element of storytelling as it helps to immerse the reader or listener in the world of the story and can contribute to the emotional impact of the narrative. By using sensory details to create a vivid and engaging ambient setting, writers can create a more immersive and memorable story. and enhance the listener's feel the environment with the ${topic} of music.
      for Structure of this lyric use ${structure} of music lyrics refers to the way lyrics are organized within a song. While there is no strict formula for writing lyrics, most songs follow a common structure that consists of several key elements. Here's a general breakdown of a typical song lyric structure:
      Verse: The verse usually sets the scene, introduces the story or theme, and provides details. Each verse typically has the same melody but different lyrics, allowing the story or message to progress throughout the song.
      Chorus: The chorus is the most memorable part of the song and often contains message talk about  ${topic} of this song. It usually has a catchy word and is repeated multiple times throughout the song, with the same lyrics each time.
      Pre-Chorus: Not all songs have a pre-chorus, but when present, it serves as a transitional section between the verse and chorus. It often builds tension or anticipation before the chorus and may contain different lyrics and melody than the verse and chorus.
      Bridge: The bridge is an optional section that provides a contrast to the verse and chorus, both musically and lyrically. It usually appears after the second or third chorus and offers a change of pace, often featuring different chords, melody, and lyrics. It serves to create variety and can provide a resolution or new perspective on the song's theme.
      Outro: The outro is the closing section of the song, bringing  lyrics to a conclusion the story of this song go to end of this section story of ${topic} have ${endingStyle} on this section. 
      for voice of lyric wrte in ${style} attitude or perspective towards the ${topic} story relatiobship of sentence focus on use as ${poeticFeet} of sentence 
      and relationship between sentence in section use ${rhymeScheme} for ryhme 
      make Musicality: ${musicality} flow of the lyrics to ensure they complement the music and enhance the song's overall feel.
      lyric i will use for : ${inspirationBy} song as a refferance make for ${audience} listenner 
      tell me only title and lyric `;

      //check prompt
      console.log(prompt);
      //const prompt = `${Emotion} ${tone} ${ambient} ${structure} ${style} ${endingStyle} ${pointOfView} ${musicality} ${audience} ${rhymeScheme} ${poeticFeet} ${inspirationBy}.`;

      // Get the API key and check if it's valid
      const apiKey = document.getElementById("api-key-input").value;
      if (!apiKey) {
        // If the API key is empty, show an error message
        const connectionStatus = document.getElementById("connection-status");
        connectionStatus.textContent = "Please enter an API key";
        connectionStatus.style.color = "red";
        return;
      }
const status = document.getElementById("status");

      try {
        // Make a request to the OpenAI API
        const response = await fetch("https://api.openai.com/v1/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 600,
            n: 1,
            temperature: 0.8,
          }),
        });

      // Show the status message
      const output = document.getElementById('output');
      
        // Parse the response from the API
        const data = await response.json();
       
        // Clear previous output
        if (response.ok) {
          output.textContent = ' ';
          output.textContent = 'Generating lyrics...';
          setTimeout(() => {
            // If the response is successful, display the generated lyrics
            output.textContent = data.choices[0].text.trim();
            // Replace line breaks with <br> tags
            output.innerHTML = output.innerHTML.replace(/\n/g, "<br>");
          }, 5000);
  
        } else {
          // If the response is not successful, display an error message
          const outputDiv = document.createElement("div");
          outputDiv.textContent = `Error: ${data.error.message}`;
          outputDiv.style.color = "red";
          outputContainer.appendChild(outputDiv);
        }
      } catch (error) {
        // If there's an error, display an error message
        output.textContent = "Error: Could not connect to the OpenAI API";
        output.style.color = "red";
      }
      
    });
  })
  
  .catch((error) => {
    console.error("Error loading JSON file:", error);
  });
