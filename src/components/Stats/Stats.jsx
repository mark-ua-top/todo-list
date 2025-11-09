import styled from "styled-components";

const StatsContainer = styled.div`
display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #000000ff;
    border-radius: 5px;
    background-color: #5a5a5aff;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const StatItem = styled.p`
  flex-grow: 1;
      color: lightgray;
`;

function Stats({ total, completed }) {
    return (
        <StatsContainer className="stats">
            <StatItem>Всього завдань: {total}</StatItem>
            <StatItem>Виконано: {completed}</StatItem>
        </StatsContainer>
    );
}

export default Stats;
