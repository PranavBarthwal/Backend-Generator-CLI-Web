import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatsComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [stats, setStats] = useState({
    totalDownloads: 0,
    weeklyDownloads: 0,
    stars: 0,
  });

  const fetchData = async () => {
    try {
      // Fetch total downloads from NPM
      const totalResponse = await fetch('https://api.npmjs.org/downloads/point/last-month/backend-generator-cli');
      const totalData = await totalResponse.json();
      
      // Fetch weekly downloads from NPM
      const weeklyResponse = await fetch('https://api.npmjs.org/downloads/point/last-week/backend-generator-cli');
      const weeklyData = await weeklyResponse.json();
      
      // Fetch GitHub stars
      const starsResponse = await fetch('https://api.github.com/repos/PranavBarthwal/backend-generator-cli');
      const starsData = await starsResponse.json();

      setStats({
        totalDownloads: totalData.downloads,
        weeklyDownloads: weeklyData.downloads,
        stars: starsData.stargazers_count,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { totalDownloads, weeklyDownloads, stars } = stats;

  return (
    <div id="stats" className="text-white py-16 px-4 md:px-8" ref={ref}>
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
          Our Stats
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" p-6 rounded-lg border-2 border-indigo-600 shadow-indigo-bottom">
            <h3 className="text-2xl lg:text-3xl font-bold text-indigo-200 mb-2">
              {inView && (
                <CountUp start={0} end={stars} duration={2} suffix="+" />
              )}
            </h3>
            <p className="text-gray-400">GitHub Stars</p>
          </div>
          <div className="p-6 rounded-lg border-2 border-indigo-600 shadow-indigo-bottom">
            <h3 className="text-2xl lg:text-3xl font-bold text-indigo-200 mb-2">
              {inView && (
                <CountUp start={0} end={weeklyDownloads} duration={2} suffix="+" />
              )}
            </h3>
            <p className="text-gray-400">Weekly NPM Downloads</p>
          </div>
          <div className="p-6 rounded-lg border-2 border-indigo-600 shadow-indigo-bottom">
            <h3 className="text-2xl lg:text-3xl font-bold text-indigo-200 mb-2">
              {inView && (
                <CountUp start={0} end={totalDownloads} duration={2} suffix="+" />
              )}
            </h3>
            <p className="text-gray-400">Total NPM Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;



