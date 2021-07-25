import React from 'react'
import { useGlopalContext } from '../context'
import {
  FaGlobe,
  FaRedo,
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
} from 'react-icons/fa'

const ManageReq = () => {
  const { list, handleId, id, removeItem, handleEdit, handleAddReq } =
    useGlopalContext()
  return (
    <section className='manage-req'>
      <div className='container'>
        <div className='content'>
          {/* header */}
          <header>
            <h4>manage leave request</h4>
            <h6>you have {list.length} application(s)</h6>
          </header>
          {/* body */}
          <div className='body'>
            {/* search and icons container */}
            <div className='search-icons-container'>
              {/* search container */}
              <div className='search-container'>
                <span className='icon-globe'>
                  <FaGlobe />
                </span>
                <div className='search-content'>
                  <input
                    type='search'
                    placeholder='search employee name or job title'
                  />
                  <FaRedo className='icon-redo' />
                </div>
                <span className='icon-search'>
                  <FaSearch />
                </span>
              </div>
              {/* icons container */}
              <ul className='icons-container'>
                {id !== null && (
                  <li className='selected-id'>selected id : {id}</li>
                )}
                <li className='icon' onClick={handleAddReq} name='add'>
                  <FaPlus />
                </li>
                <li
                  name='edit'
                  className={`icon ${id === null ? 'disabled' : ''}`}
                  onClick={handleEdit}
                >
                  <FaEdit />
                </li>
                <li
                  name='delete'
                  className={`icon ${id === null ? 'disabled' : ''}`}
                  onClick={removeItem}
                >
                  <FaTrash />
                </li>
              </ul>
            </div>
            {/* table */}
            <div className='table-container'>
              {list.length > 0 && (
                <table cellSpacing='0'>
                  <thead>
                    <tr>
                      <th>#id</th>
                      <th>image</th>
                      <th>employee name</th>
                      <th>job title</th>
                      <th>salary profile</th>
                      <th>expected leave start date</th>
                      <th>expected leave rejoin date</th>
                      <th>actual leaving</th>
                      <th>leave type 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((item) => {
                      const {
                        id: index,
                        name,
                        image,
                        job_title,
                        salary_profile,
                        expected_leaving_date,
                        expected_rejoining_date,
                        num_of_days,
                        leave_type,
                      } = item
                      return (
                        <tr
                          key={index}
                          className={index === id ? 'selected' : ''}
                          onClick={() => handleId(index)}
                        >
                          <td>{index}</td>
                          <td>
                            <img src={image} alt={name} />
                          </td>
                          <td>{name}</td>
                          <td>{job_title}</td>
                          <td>{salary_profile}</td>
                          <td>{expected_leaving_date}</td>
                          <td>{expected_rejoining_date}</td>
                          <td>{num_of_days}</td>
                          <td>{leave_type}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
              {list.length === 0 && <p className='no-data'>no data to show</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageReq
