import CardFour from '../../components/CardFour.tsx';
import CardFive from '../../components/CardFive.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import TaskLarge from '../../components/TaskLarge.tsx';
import TaskChart from '../../components/TaskChart.tsx';
import dayjs from 'dayjs';




const Home = () => {
  return (
    <>
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5"> {/*Total Views, Pofit, Product, and Users 'Cards' */}
        <CardOne />
        <CardFive />
        <CardTwo />
        <CardThree />
        <CardFour />
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-4 xl:col-span-8">
          <TaskChart date={dayjs().date().toString()}/>
        </div>
        <div className="col-span-4 xl:col-span-4">
          <TaskLarge />
        </div>
        <div className="col-span-4 xl:col-span-8">
          <ChartTwo />
        </div>
        <ChartThree />
      </div>
    </>
  );
};

export default Home;
