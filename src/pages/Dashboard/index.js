import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { toast } from 'react-toastify';
import api from '../../services/api';

import Navigation from '../../components/Navigation';
import Widget from '../../components/Widget';
import Graphic from '../../components/Graphic';

import months from '../../utils/months';
import states from '../../utils/states';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [widget1, setWidget1] = useState({});
  const [widget2, setWidget2] = useState({});
  const [widget3, setWidget3] = useState([]);
  const [graphic, setGraphic] = useState({});

  const totalWidget3 = data => {
    let total = 0;
    data.forEach(object => {
      total += parseInt(object.count);
    });
    return total;
  };

  const organizeGraphicData = data => {
    let years = [];
    let count = [];
    data.forEach(object => {
      years.push(object.year);
      count.push(object.count);
    });
    return {
      labels: years,
      datasets: [
        {
          data: count,
          fill: false,
          lineTension: 0.4,
          borderColor: 'rgba(20,240,245,1)',
          pointRadius: 0,
        },
      ],
    };
  };

  useEffect(() => {
    async function getInstallations() {
      setLoading(true);
      try {
        const response = await api.get(`/installations`);

        const state = states.filter(state => {
          return state.key === response.data[0].state;
        });

        const threeMonthsTotal = response.data[2].map(item => {
          return (
            <span key={item.month}>
              {months[item.month - 1]} ({item.count})
            </span>
          );
        });

        const costInstallation = Number(response.data[1].cost).toLocaleString(
          'en-US',
          {
            style: 'currency',
            currency: 'USD',
          }
        );

        const widget1info1 = `${state[0].key} (${state[0].value})`;
        const widget1info2 = response.data[0].total;

        const widget2info1 = response.data[1].zip_code;
        const widget2info2 = costInstallation;

        const widget3info1 = threeMonthsTotal;
        const widget3info2 = totalWidget3(response.data[2]);

        setGraphic(organizeGraphicData(response.data[3]));
        setWidget1({ info1: widget1info1, info2: widget1info2 });
        setWidget2({ info1: widget2info1, info2: widget2info2 });
        setWidget3({ info1: widget3info1, info2: widget3info2 });
      } catch (e) {
        if (e.response) toast.warn(`${e.response.data.error}`);
        else {
          toast.error('Erro interno, tente mais tarde.');
        }
      }
      setLoading(false);
    }

    getInstallations();
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <div className="chart">
          <Graphic data={graphic} />
        </div>
        <div className="widgets">
          <Widget
            loading={loading}
            data={widget1}
            label={{
              title: 'Instalações',
              subtitle1: 'Estado',
              subtitle2: 'Total',
            }}
            backgroundColor1="hsl(301,98%,81%) 0%"
            backgroundColor2="hsl(37,99%,73%) 100%"
            gradientDirection="215deg"
          />
          <Widget
            loading={loading}
            data={widget2}
            label={{
              title: 'Maior custo',
              subtitle1: 'CEP',
              subtitle2: 'Custo da instalação',
            }}
            backgroundColor1="hsl(197,99%,74%) 0%"
            backgroundColor2="hsl(154,89%,58%) 100%"
            gradientDirection="to bottom"
          />
          <Widget
            loading={loading}
            data={widget3}
            label={{
              title: 'Mais instalações',
              subtitle1: 'Meses',
              subtitle2: 'Total',
            }}
            backgroundColor1="hsl(223,100%,74%) 0%"
            backgroundColor2="hsl(290,98%,82%) 100%"
            gradientDirection="135deg"
          />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 4% 4% 0 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .chart {
    width: 100%;
  }

  .widgets {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export default Dashboard;
