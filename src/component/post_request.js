import React from 'react'
import { FaFlag, FaGlobe, FaRedo } from 'react-icons/fa'
import { useGlopalContext } from '../context'
const PostRequest = () => {
  const {
    id,
    data: {
      name,
      leave_to_avail,
      require_leave_salary_advance,
      expected_leaving_date,
      expected_rejoining_date,
      leave_type,
      guarantor,
      num_of_days,
      replacement,
      address,
      contact_no,
      email,
      remarks,
      job_title,
      salary_profile,
      joining_date,
      location,
    },
    handleChange,
    handleSubmit,
    submitEdit,
    handleCancel,
    search,
    search_result,
    handleSearch,
    selectItemFromSearch,
    item_selected_from_search,
    clearSearch,
  } = useGlopalContext()

  return (
    <section className='post-request'>
      <div className='container'>
        <div className='content'>
          {/* header */}
          <header>
            <h4>post leave request</h4>
            <h6>
              <FaFlag className='icon' />
              request no.
            </h6>
          </header>
          {/* grid */}
          <div className='grid'>
            <div className='container-form'>
              {/* search */}
              <div className='search-container'>
                <FaGlobe className='icon-globe' />
                <div className='search-content'>
                  <input
                    type='search'
                    name='search'
                    value={search}
                    placeholder='employee name, id or job title'
                    onChange={handleSearch}
                  />
                  {!search && (
                    <FaRedo className='icon-redo' onClick={clearSearch} />
                  )}
                  {search_result.length > 0 && (
                    <ul className='result-search'>
                      {search_result.map((item) => {
                        const { id, job_title, name, image } = item
                        return (
                          <li key={id} onClick={() => selectItemFromSearch(id)}>
                            <img src={image} alt={name} />
                            <span>
                              {id}|{name}|{job_title}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </div>
              {/* personal info */}
              <div className='personal-info-container'>
                <div className='img-container'>
                  <img src='images/avatar.png' alt='avatar' />
                </div>
                <div className='personal-info'>
                  <ul>
                    <li>
                      <span className='title'>jop title</span>
                      <span className='data'>
                        {item_selected_from_search.job_title || ''}
                      </span>
                    </li>
                    <li>
                      <span className='title'>salary profile</span>
                      <span className='data'>
                        {item_selected_from_search.salary_profile || ''}
                      </span>
                    </li>
                    <li>
                      <span className='title'>joining data</span>
                      <span className='data'>
                        {item_selected_from_search.joining_date || ''}
                      </span>
                    </li>
                    <li>
                      <span className='title'>location</span>
                      <span className='data'>
                        {item_selected_from_search.location || ''}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* form */}
              <div className='form-content'>
                <form>
                  <div className='leave-details'>
                    <h4 className='text'>leave details</h4>
                    {/* leave to avail */}
                    <div className='input-container'>
                      <span className='title'>leave to avail</span>
                      <div className='radio-btns'>
                        <input
                          id='abroad'
                          type='radio'
                          name='leave_to_avail'
                          value='abroad'
                          onChange={handleChange}
                          checked={leave_to_avail === 'abroad' ? true : false}
                        />
                        <label className='label-form' htmlFor='abroad'>
                          abroad
                        </label>
                        <input
                          id='local'
                          type='radio'
                          name='leave_to_avail'
                          value='local'
                          onChange={handleChange}
                          checked={
                            leave_to_avail === '' || leave_to_avail === 'local'
                              ? true
                              : false
                          }
                        />
                        <label className='label-form' htmlFor='local'>
                          local
                        </label>
                      </div>
                    </div>
                    {/* require leave salary advance */}
                    <div className='input-container'>
                      <span className='title'>
                        require leave salary advance
                      </span>
                      <div className='radio-btns'>
                        <input
                          id='yes'
                          type='radio'
                          name='require_leave_salary_advance'
                          value='yes'
                          onChange={handleChange}
                          checked={
                            require_leave_salary_advance === 'yes'
                              ? true
                              : false
                          }
                        />
                        <label className='label-form' htmlFor='yes'>
                          yes
                        </label>
                        <input
                          id='no'
                          type='radio'
                          name='require_leave_salary_advance'
                          value='no'
                          onChange={handleChange}
                          checked={
                            require_leave_salary_advance === '' ||
                            require_leave_salary_advance === 'no'
                              ? true
                              : false
                          }
                        />
                        <label className='label-form' htmlFor='no'>
                          no
                        </label>
                      </div>
                    </div>
                    {/* expected leaving and rejoining date */}
                    <div className='grid-inputs'>
                      <div className='input-container'>
                        <span className='title'>expected leaving date</span>
                        <input
                          type='date'
                          value={expected_leaving_date}
                          name='expected_leaving_date'
                          onChange={handleChange}
                        />
                      </div>
                      <div className='input-container'>
                        <span className='title'>expected rejoing date</span>
                        <input
                          type='date'
                          value={expected_rejoining_date}
                          name='expected_rejoining_date'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* expected end date */}
                    <div className='input-container'>
                      <span className='title'>expected end date</span>
                    </div>
                    {/* leave-type */}
                    <div className='leave-type grid-inputs'>
                      <div className='input-container'>
                        <span className='title'>1st leave type</span>
                        <select
                          name='leave_type'
                          value={leave_type}
                          onChange={handleChange}
                        >
                          <option
                            disabled={leave_type === '' ? false : true}
                            hidden={leave_type === '' ? true : false}
                          >
                            --please select leave type--
                          </option>
                          <option value='travel'>travel</option>
                          <option value='sik'>sik</option>
                        </select>
                      </div>
                      <div className='input-container'>
                        <span className='title'>no. of days</span>
                        <input
                          type='number'
                          name='num_of_days'
                          placeholder='enter numb'
                          value={num_of_days}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* guarantor and replacement */}
                    <div className='guarantor-replacement-conatiner'>
                      <div className='guarantor'>
                        <div className='header'>guarantor</div>
                        <div className='body'>
                          <select
                            name='guarantor'
                            value={guarantor}
                            onChange={handleChange}
                          >
                            <option value='guarantor1'>guarantor1</option>
                            <option value='guarantor2'>guarantor2</option>
                          </select>
                        </div>
                      </div>
                      <div className='replacement'>
                        <div className='header'>replacement</div>
                        <div className='body'>
                          <select
                            name='replacement'
                            value={replacement}
                            onChange={handleChange}
                          >
                            <option value='replacement1'>replacement1</option>
                            <option value='replacement2'>replacement2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* contact details */}
                    <div className='contact-details'>
                      <div className='header'>contact details during leave</div>
                      <div className='body grid-inputs'>
                        <div className='input-container'>
                          <label htmlFor='name'>name</label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            value={name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='address'>address</label>
                          <input
                            type='address'
                            name='address'
                            id='address'
                            value={address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='contact_no'>contact no.</label>
                          <input
                            type='text'
                            name='contact_no'
                            id='contact_no'
                            value={contact_no}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='email'>email</label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='job_title'>job title</label>
                          <input
                            type='text'
                            name='job_title'
                            id='job_title'
                            value={job_title}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='salary_profile'>salary profile</label>
                          <input
                            type='text'
                            name='salary_profile'
                            id='salary_profile'
                            value={salary_profile}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='joining_date'>joining_date</label>
                          <input
                            type='text'
                            name='joining_date'
                            id='joining_date'
                            value={joining_date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input-container'>
                          <label htmlFor='location'>location</label>
                          <input
                            type='text'
                            name='location'
                            id='location'
                            value={location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* remarks and attachments */}
                  <div className='remarks-attachments'>
                    <div className='remarks'>
                      <div className='header'>remarks</div>
                      <div className='body'>
                        <textarea
                          name='remarks'
                          value={remarks}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className='attachments'>
                      <div className='header'>attachments (optional)</div>
                      <div className='body'>
                        <input
                          type='file'
                          name='attachments'
                          multiple
                          id='file'
                          // value={attachments}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='btn-container'>
                    <button className='cancel-btn' onClick={handleCancel}>
                      cancel
                    </button>
                    <button
                      className={`submit-btn ${id !== null ? 'disabled' : ''} `}
                      onClick={handleSubmit}
                    >
                      submit
                    </button>
                    <button
                      className={`edit-btn ${id !== null ? '' : 'disabled'} `}
                      onClick={submitEdit}
                    >
                      edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* info */}
            <div className='info'>
              <h4>
                annual leave balance as on {new Date().getDate()}{' '}
                {new Date().getUTCMonth() + 1} {new Date().getFullYear()}
              </h4>
              <h4>annaul leave</h4>
              <ul>
                <li>
                  <span>annaul leave entitlement</span>
                  <span>30 days every 365 day(s)</span>
                </li>
                <li>
                  <span>annaul leave balance</span>
                  <span>
                    {item_selected_from_search.num_of_days || ''}day(s)
                  </span>
                </li>
              </ul>
              <h4>extra days</h4>
              <ul>
                <li>
                  <span>extra days balance</span>
                  <span>
                    {item_selected_from_search.num_of_days !== ''
                      ? 30 > +item_selected_from_search.num_of_days
                        ? 0
                        : +item_selected_from_search.num_of_days - 30
                      : ''}
                    day(s)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostRequest
