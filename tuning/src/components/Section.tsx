import styled from 'styled-components';

const Sect = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5em;
    padding: 1em;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f0f0f0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif; 
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const Heading2 = styled.h2`
    margin: 0;
    padding: 0;
`;


interface SectionProps {
    items: string[][];
  }
  
function Section({items}: SectionProps) {
    return (
        <>
            {items.map((item, index) => (
                <Sect key={index}>
                    <Heading2>{item[0]}</Heading2>
                    <Ul>
                        {item.slice(1).map((subitem, index) => (
                            <li key={index}>{subitem}</li>
                        ))}
                    </Ul>
                </Sect>
            ))}
        </>
    );
}


  export default Section;