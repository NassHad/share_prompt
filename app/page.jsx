import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Partagez et Découvrez des
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    Prompts pour IA
                </span>
            </h1>
            <p className="desc text-center">
                Ce site est un projet fait avec Next.js, permettant de créer des
                notes contenant des prompts adaptés pour différentes IA
                (ChatGPT, MidJourney, DALL-E, etc).
            </p>
            <Feed />
        </section>
    );
};

export default Home;
