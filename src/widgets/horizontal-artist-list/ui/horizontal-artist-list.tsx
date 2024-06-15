import { Title3 } from "@/shared/ui/typo";
import {
  ArtistCard,
  ArtistProfileImageWrapper,
  HorizontalArtistListContainer,
} from "./style";

interface Artist {
  name: string;
  profileURL: string;
}

interface Props {
  artists: Artist[];
  didSelect: (artist: Artist) => void;
}

export const HorizontalArtistList = ({ artists, didSelect }: Props) => {
  return (
    <HorizontalArtistListContainer direction="horizontal">
      {artists.map((artist) => (
        <ArtistCard onClick={() => didSelect(artist)}>
          <ArtistProfileImageWrapper>
            <img src={artist.profileURL} width={"100%"} height={"100%"} />
          </ArtistProfileImageWrapper>
          <Title3>{artist.name}</Title3>
        </ArtistCard>
      ))}
    </HorizontalArtistListContainer>
  );
};
