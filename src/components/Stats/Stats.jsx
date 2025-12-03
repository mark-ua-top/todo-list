import { Component } from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #5a5a5aff;
  width: 180px;
  margin: 20px auto;
`;

const StatItem = styled.p`
  color: lightgray;
`;

class Stats extends Component {

  render() {
    const { total, completed, timer } = this.props;
    return (
      <StatsContainer>
        <StatItem>Всього завдань: {total}</StatItem>
        <StatItem>Виконано: {completed}</StatItem>
        {timer > 0 && <StatItem>Зачекайте: {timer} сек</StatItem>}
      </StatsContainer>
    );
  }
}

export default Stats;
