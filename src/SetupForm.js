import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Setup Quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {error && (
            <p className='error'>can't generate questions, please try again</p>
          )}

          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'></label>
            <select
              name='category'
              id='category'
              value={quiz.category}
              onChange={handleChange}
              className='form-input'
            >
              <option value='music'>Music</option>
              <option value='history'>History</option>
              <option value='sports'>Sports</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>Select Difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              value={quiz.difficulty}
              onChange={handleChange}
              className='form-input'
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
