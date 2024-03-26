import React, { ChangeEvent, useState } from 'react'
import styles from './AddTestBlock.module.scss'
import { Input } from '../../atoms/Input/Input'
import { InputSelect } from '../../atoms/Input'
import { Text } from '../../atoms/Text/Text'

import clear from '../../../assets/icons/clear.svg'
import trash from '../../../assets/icons/trash.svg'
import dub from '../../../assets/icons/dub.svg'

const options = [
  { id: 'one', value: 'Один из списка' },
  { id: 'multy', value: 'Несколько из списка' },
]

export const AddTestBlock = () => {
  const [questions, setQuestions] = useState([{ question: '', answers: [''] }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answers: [''] }]);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleAddAnswer = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].answers.push('');
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };

  const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(newQuestions);
  };

  const handleRemoveBlock = (questionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(questionIndex, 1);
    setQuestions(newQuestions);
  }

  const handleCopyBlock = (questionIndex: number) => {
    setQuestions([...questions, questions.splice(questionIndex, 1)[0]]);
  }

  const handleSubmit = () => {
    console.log(questions);
  };

  return (
    <div className={styles.test_form}>
      {questions.map((questionObj, questionIndex) => (
        <div className={styles.test_block}>
          <div className={styles.question}>
            <Input type='text' value={questionObj.question} placeholder='Вопрос' onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuestionChange(questionIndex, e.target.value)} />
            <InputSelect options={options} />
          </div>

          <div className={styles.answers}>
            {questionObj.answers.map((answer, answerIndex) => (
              <div key={answerIndex} className={styles.answer}>
                <Input key={answerIndex} type="text" value={answer} placeholder='Вариант ответа' size='s' onChange={(e: ChangeEvent<HTMLInputElement>) => handleAnswerChange(questionIndex, answerIndex, e.target.value)} />
                <Text onClick={() => handleRemoveAnswer(questionIndex, answerIndex)} tag='span'><img alt='delete' className={styles.delete_btn} src={clear} /></Text>
              </div>
            ))}
            <Text className={styles.add_variant_btn} onClick={() => handleAddAnswer(questionIndex)} tag='span' size='xs'>Добавить вариант</Text>
            <div className={styles.btns}>
              <button className={styles.copy_block} onClick={() => handleCopyBlock(questionIndex)}><img alt='copy block' src={dub} /></button>
              <button className={styles.delete_block} onClick={() => handleRemoveBlock(questionIndex)}><img alt='deleteblock' src={trash} /></button>
            </div>
          </div>
        </div>
      ))}

      <button className={styles.add_block_btn} onClick={handleAddQuestion}>+</button>
    </div>
  );
};
