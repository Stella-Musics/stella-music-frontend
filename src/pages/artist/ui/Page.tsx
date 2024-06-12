import { Title1 } from "@/shared/ui/typo";
import { ArtistGenerationContainer, ArtistPageContainer } from "./style";
import { HorizontalArtistList } from "@/widgets/horizontal-artist-list";

export const ArtistPage = () => {
  return (
    <ArtistPageContainer>
      <ArtistGenerationContainer>
        <Title1>미스틱</Title1>
        <HorizontalArtistList
          artists={[
            {
              name: "유니",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            },
            {
              name: "칸나",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            }
          ]}
          didSelect={() => { }}
        />
      </ArtistGenerationContainer>
      <ArtistGenerationContainer>
        <Title1>유니버스</Title1>
        <HorizontalArtistList
          artists={[
            {
              name: "타비",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            },
            {
              name: "히나",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            },
            {
              name: "리제",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            },
            {
              name: "시로",
              profileURL:
                "https://nng-phinf.pstatic.net/MjAyNDA1MDdfNjAg/MDAxNzE1MDg1OTM5MDA0.KR_3Kv9jDjncc4dfsrgJKbvxRhW4D6aRy99XCXWPxEUg.5GkU_AcajO7jCbirk6voqArY4T86GMHMIizjHN4jHZUg.PNG/%EC%9D%BC%EB%9F%AC%EC%8A%A4123123%ED%8A%B8.png?type=f120_120_na",
            }
          ]}
          didSelect={() => { }}
        ></HorizontalArtistList>
      </ArtistGenerationContainer>
    </ArtistPageContainer>
  );
};
