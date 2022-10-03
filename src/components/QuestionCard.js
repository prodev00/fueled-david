import Input from './Input';
import Select from './Select';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';

import './QuestionCard.scss';

const SELECT_OPTIONS = [
  { value: 'short', label: 'Short Answer' }
]

const QuestionCard = ({
  id,
  question,
  answer,
  type,
  setQuestion,
  setType,
  setAnswer,
  number,
  total,
  onTrash,
}) => {
  return (
    <div className="question-card">
      <div className="question-input mb-8">
        <label>Question</label>
        <Input
          fullWidth={true}
          placeholder="What do you want to ask?"
          value={question}
          onChange={(e) => setQuestion(id, e.target.value)}
        />
      </div>

      <div className="question-input">
        <label>Answer</label>
        <div className="mt-4">
          <Select
            options={SELECT_OPTIONS}
            selected={type}
            onSelect={(item) => setType(id, item)}
          />
        </div>
        
        <div className="mt-4">
          <Input
            fullWidth
            placeholder="Short answer text"
            value={answer}
            onChange={(e) => setAnswer(id, e.target.value)}
          />
        </div>

        {number && total > 1 && (
          <div className="numbers mt-8">
            <div>{number} of {total}</div>
            <div className="action-btns">
              <div className="action-btn">
                <ArrowUpIcon />
              </div>

              <div className="action-btn">
                <ArrowDownIcon />
              </div>

              <div onClick={() => onTrash(id)} className="action-btn trash">
                <TrashIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
