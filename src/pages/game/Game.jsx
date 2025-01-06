import './Game.css';

const Game = () => {
    const planItems = [
        { text: "UN EJÉRCITO DE PATOS ENTRENADOS.", color: "white" },
        { text: "UN EJÉRCITO DE GATOS NINJA.", color: "purple" },
        { text: "CONTROLAR EL WI-FI MUNDIAL.", color: "white" },
        { text: "ROBOTS QUE HACEN PIZZA INFINITA.", color: "white" },
        { text: "HIPNOTIZAR CON MEMES VIRALES.", color: "white" }
    ];

    return (
        <div className="question">
            <div className="header">sinvergüenza</div>

            <div className="question-title">
                "MI PLAN SECRETO PARA
                CONQUISTAR EL MUNDO
                INCLUYE.............."
            </div>
            <div className='response-list'>
                <ul className="plan-list">
                    {planItems.map((item, index) => (
                        <li
                            key={index}
                            style={{ color: item.color }}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">HUMOR NEGRO</div>
        </div>
    );
};

export default Game;