import React from "react";
import ViewToggler from "./ViewToggler";

const Typography = () => {
  return (
    <main>
      <h2>Typography</h2>
      <h3>Font Choices</h3>
      <ViewToggler buttonName="Complimentary">
        <p style={{ fontFamily: "Georgia", fontWeight: "bold", fontSize: 40 }}>
          How does this (Georgia) look...
        </p>
        <p style={{ fontFamily: "Verdana", fontWeight: "bold", fontSize: 40 }}>
          With this (Verdana) ...
        </p>
      </ViewToggler>
      <ViewToggler buttonName="Conflicting">
        <p
          style={{
            fontFamily: "Baskerville",
            fontWeight: "bold",
            fontSize: 40
          }}
        >
          How does this (Baskerville) look...
        </p>
        <p style={{ fontFamily: "Impact", fontWeight: "bold", fontSize: 40 }}>
          With this (Impact) ...
        </p>
      </ViewToggler>
      <h3>Text Bodies</h3>
      <ViewToggler buttonName="Text Bodies">
        <p
          style={{
            fontFamily: "Snell Roundhand",
            lineHeight: "1.3"
          }}
        >
          ten chars, nowtwnty, nowThirty, FortyNow, fiftyNow, sixtynow, <br />
          Large bodies of text can be difficult to read ... <br />
          Todd Haynes is such a distinctive authorial voice in American cinema,
          a genius from left field, notably addressing identity and sexuality,
          and with an interest in fantasy, pastiche and the vicissitudes of
          period detail. Dark Waters is in so many ways out of character for
          him: a straight-ahead, true-life legal thriller, fluently adapted by
          screenwriters Mario Correa and Matthew Michael Carnahan from a New
          York Times magazine article by Nathaniel Rich. Todd Haynes: 'People
          who say Trump is bound to win are letting it happen' Read more It
          plays out in the absorbing classic style, featuring the principled
          lawyer (played here by Mark Ruffalo) taking on the corporate bad guys
          on behalf of ordinary folks. There are no ironically self-aware
          stylistic touches, although – given that it is a film about bad things
          being hidden in the waters – the first scene with young people rashly
          swimming in a poisoned creek could allude to the opening of Jaws. Rob
          Bilott (Ruffalo) is the besuited corporate lawyer from Ohio who has
          built a blandly prosperous career in the 1990s representing big,
          powerful companies. But then an angry West Virginia farmer called
          Wilbur Tennant (ferociously played by Bill Camp) gets in touch,
          because he is a friend and neighbour of Bilott’s grandma. (In real
          life, Tennant just called Bilott on the phone; the movie has him show
          up embarrassingly in the office in his dusty farmer’s gear.) All of
          Wilbur’s cows are being horribly poisoned because of chemical firm
          DuPont’s nearby plant. Something truly evil is going on.
          FacebookTwitterPinterest This is a moment of destiny. Because an
          unhappy farmer knew his grandmother, and showed him the truth about
          how corporations were treating innocent people, Bilott switched sides,
          to the initial horror of his colleagues and discomfiture of his family
          and wife Sarah (Anne Hathaway). The film shows that he was turned, or
          flipped, like a spy – using his knowledge of the big chemical firms
          against them. Advertisement Legal dramas such as Erin Brockovich and
          Richard Jewell generally present a rather quaintly imagined ordinary
          person, with all his or her blue-collar flaws, taking on the fat-cat
          establishment with the help of an overworked maverick lawyer. This
          isn’t quite how Dark Waters plays out: Camp’s farmer is the ordinary
          person, right enough, but the limelight settles on Ruffalo’s lawyer,
          who is the real everyman – slumped, with bad posture, a permanent
          grimace on his lower lip and a stress-induced tremor in his hand. In
          some ways, the movie is closer to something like Michael Mann’s The
          Insider (1999) about taking on big tobacco. It’s a procedural, and all
          the fascination is in the detail: the mounds of documents, the
          boardroom discussions, the cunning courtroom strategies and the heroic
          jiu-jitsu of using a corporation’s massive institutional weight
          against it. Dark Waters is a movie that works marvellously well within
          its own generic terms, and perhaps after the fey disappointment of
          Todd Haynes’s previous, rather insufferable fantasy Wonderstruck, this
          tough, clear movie was what Haynes needed to clear his creative
          palate. • Dark Waters is released in the UK on 28 February and in
          Australia on 5 March.
        </p>
      </ViewToggler>
    </main>
  );
};

export default Typography;
