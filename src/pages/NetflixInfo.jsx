import { Jumbo } from '../components';
import { jumbo } from "../seed";

export const NetflixDetails = () => {
  return (
    <Jumbo.Container>
        {jumbo.map(data => (
            <Jumbo key={data.id} direction={data.direction}>
                <Jumbo.Pane>
                    <Jumbo.Title> {data.title} </Jumbo.Title>
                    <Jumbo.SubTitle> {data.subTitle} </Jumbo.SubTitle>
                </Jumbo.Pane>
                <Jumbo.Pane>
                    <Jumbo.Image src={data.image} alt={data.alt} />
                </Jumbo.Pane>
            </Jumbo>
        ))}
    </Jumbo.Container>
  )
}
