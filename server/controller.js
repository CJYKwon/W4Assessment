module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "All will go well with your new project.", "Believe in yourself and others will too.", "Courtesy is contagious.", "Happiness begins with facing life with a smile and a wink."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune =fortunes[randomIndex];
      
        res.status(200).send(randomFortune);


} 
}