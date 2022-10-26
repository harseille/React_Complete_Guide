import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: '광화문',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/275px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg',
    address: '대한민국 서울특별시 종로구 사직로 161',
    description:
      '광화문(光化門)은 경복궁의 남쪽에 있는 정문이다. ‘임금의 큰 덕(德)이 온 나라를 비춘다’는 의미이다.',
  },
  {
    id: 'm2',
    title: '중앙역',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/450_Jungang_Main.jpg/300px-450_Jungang_Main.jpg',
    address: '	경기도 안산시 단원구 중앙대로 918',
    description:
      '중앙역(Jungang station, 中央驛)은 경기도 안산시 단원구 고잔동에 있는 수도권 전철 4호선, 수도권 전철 수인·분당선의 철도역이다. 부기역명은 서울예술대이다.',
  },
  {
    id: 'm3',
    title: '한강진역',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Q278103_Hangangjin_A01.jpg/300px-Q278103_Hangangjin_A01.jpg',
    address: '	서울특별시 용산구 이태원로 지하287',
    description:
      '한강진역(Hangangjin station, 漢江鎭驛)은 서울특별시 용산구 한남동 북한남삼거리에 있는 서울 지하철 6호선의 지하철역이다.',
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;