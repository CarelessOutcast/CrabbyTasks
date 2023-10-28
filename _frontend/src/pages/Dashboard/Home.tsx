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

import useTaskContext from '../../hooks/useTaskContext';
import {useEffect} from 'react';
import dayjs from 'dayjs';



const Home = () => {

  const today = dayjs();
  const {userTasksStats, updatedStats} = useTaskContext();

  useEffect(()=>{
    console.log(userTasksStats.current);
    },[updatedStats]);
  
  return (
    <>
    { userTasksStats ? 
      (
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5"> 
       {/*Total Views, Pofit, Product, and Users 'Cards' */}
        <CardOne   userTasksStats={userTasksStats} />
        <CardFive  userTasksStats={userTasksStats} />
        <CardTwo   userTasksStats={userTasksStats} />
        <CardThree userTasksStats={userTasksStats} />
        <CardFour  userTasksStats={userTasksStats} />
      </div>
      ) : (
        <div>Loading Cards...</div>
      )
    }

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-4 xl:col-span-8">
        <TaskChart date={today.toString()}/>
        </div>
        <div className="col-span-4 xl:col-span-4">
          <TaskLarge />
        </div>
        <div className="col-span-4 xl:col-span-8">
        <ChartThree />
        </div>
        
      </div>
    </>
  );
};

export default Home;
