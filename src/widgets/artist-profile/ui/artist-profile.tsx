import { Headline1 } from "@/shared/ui/typo";
import {
  ArtistProfileContainer,
  ArtistProfileImageWrapper,
  ArtistProfileInfoContainer,
  LinkIconContainer,
  LinkIconWrapper,
} from "./style";
import { ChzzkIcon, YoutubeIcon } from "@/shared/ui/icons";

interface Props {
  artistProfileURL: string;
  artistName: string;
  youtubeURL: string;
  chzzkURL: string;
}

export const ArtistProfile = ({
  artistProfileURL,
  artistName,
  youtubeURL,
  chzzkURL,
}: Props) => {
  return (
    <ArtistProfileContainer>
      <ArtistProfileImageWrapper>
        <img
          src={artistProfileURL}
          width={"100%"}
          height={"100%"}
          alt={artistName}
        />
      </ArtistProfileImageWrapper>
      <ArtistProfileInfoContainer>
        <Headline1>{artistName}</Headline1>
        <LinkIconContainer>
          <LinkIconWrapper href={youtubeURL}>
            <YoutubeIcon />
          </LinkIconWrapper>
          <LinkIconWrapper href={chzzkURL}>
            <ChzzkIcon />
          </LinkIconWrapper>
        </LinkIconContainer>
      </ArtistProfileInfoContainer>
    </ArtistProfileContainer>
  );
};
