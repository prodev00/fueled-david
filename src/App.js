import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from 'components/Navbar';
import Row from 'components/Row';
import Col from 'components/Col';
import QuestionCard from 'components/QuestionCard';
import Button from 'components/Button';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';

import './App.scss';

const App = () => {
  const [list, setList] = useState([{
    id: uuidv4(),
    question: '',
    type: { label: 'Short Answer', value: 'short' },
    answer: '',
  }]);

  const handleSetQuestion = (id, question) => {
    setList((prev) => prev.map((item) => {
      if (item.id === id) return { ...item, question };
      return item;
    }));
  };

  const handleSetAnswer = (id, answer) => {
    setList((prev) => prev.map((item) => {
      if (item.id === id) return { ...item, answer };
      return item;
    }));
  };

  const handleSetType = (id, type) => {
    setList((prev) => prev.map((item) => {
      if (item.id === id) return { ...item, type };
      return item;
    }));
  };

  const handleClickAdd = () => {
    setList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        question: '',
        type: { label: 'Short Answer', value: 'short' },
        answer: '',
      }
    ]);
  };

  const handleClickTrash = (id) => {
    setList((prev) => prev.filter((it) => it.id !== id));
  };

  const handleClickShare = useCallback(() => {
    console.log('JSON Data: ', list);
  }, [list])

  return (
    <div className="app">
      <Navbar title="New Questionnaire" />
      <div className="my-8">
        <Row display="flex" justifyContent="center">
          <Col xs={12} md={8} lg={6}>
            {list.map((item, index) => (
              <QuestionCard
                key={index}
                id={item.id}
                question={item.question}
                answer={item.answer}
                type={item.type}
                setQuestion={handleSetQuestion}
                setAnswer={handleSetAnswer}
                setType={handleSetType}
                number={index + 1}
                total={list.length}
                onTrash={handleClickTrash}
              />
            ))}

            <div className="mb-4">
              <Button onClick={handleClickAdd} fullWidth variant="outlined">
                <PlusIcon />
                <span className="ml-2">ADD QUESTION</span>
              </Button>
            </div>

            <div className="mb-4">
              <Button onClick={handleClickShare} fullWidth variant="contained">
                SAVE & SHARE
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
