import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      

      
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background z-0" />

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-40 left-16 w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>

      

      
      <div className="absolute inset-0 opacity-10 pixel-pattern z-10"></div>

     
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto fade-in-up">
          
          <div className="flex justify-center mb-8 space-x-4">
            <div className="w-16 h-16 neo-brutal-card bg-green-200-20 border-green-500 flex items-center justify-center avatar-float">
              <img src="/images/avatar1.png" />
            </div>
            <div className="w-16 h-16 neo-brutal-card bg-blue-200-20 border-blue-500 flex items-center justify-center avatar-float" style={{ animationDelay: '0.5s' }}>
              <img src="/images/avatar2.png" />
            </div>
            <div className="w-16 h-16 neo-brutal-card bg-yellow-200-20 border-yellow-500 flex items-center justify-center avatar-float" style={{ animationDelay: '1s' }}>
              <img src="/images/avatar3.png" />
            </div>
            <div className="w-16 h-16 neo-brutal-card bg-purple-200-20 border-purple-500 flex items-center justify-center avatar-float" style={{ animationDelay: '1.5s' }}>
              <img src="/images/avatar4.png" />
            </div>
          </div>

          <h1 className="pixel-font text-4xl md:text-6xl lg:text-7xl mb-6 glitch-text text-primary ghibli-title " data-text="WELCOME TO IIITBuzz">
            WELCOME TO IIITBuzz
          </h1>

          <div className="neo-brutal-card p-8 mb-8 max-w-2xl mx-auto ghibli-card ">
            <p className="text-lg md:text-xl mb-4 text-foreground">
              🎓 The ultimate community forum for IIIT students!
            </p>
            <p className="text-muted-foreground ">
              Connect, collaborate, and conquer your academic journey with fellow IIITians.
              Your digital campus hub for discussions, resources, and everything in between.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button size="lg" className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary text-lg px-8 py-6 ghibli-button">
              🚀 JOIN THE BUZZ
            </Button>
            <Button size="lg" variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black text-lg px-8 py-6 ghibli-button">
              📖 EXPLORE FIRST
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto fade-in-up">
            <div className="neo-brutal-card p-4 bg-primary-20 border-primary ghibli-feature-card">
              <div className="text-2xl mb-2">💬</div>
              <div className="pixel-font text-xs text-primary">DISCUSSIONS</div>
            </div>
            <div className="neo-brutal-card p-4 bg-secondary-20 border-secondary ghibli-feature-card" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl mb-2">❓</div>
              <div className="pixel-font text-xs text-secondary">Q&A</div>
            </div>
            <div className="neo-brutal-card p-4 bg-accent-20 border-accent ghibli-feature-card" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl mb-2">📅</div>
              <div className="pixel-font text-xs text-accent">EVENTS</div>
            </div>
            <div className="neo-brutal-card p-4 bg-destructive-20 border-destructive ghibli-feature-card" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl mb-2">📚</div>
              <div className="pixel-font text-xs text-destructive">RESOURCES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
