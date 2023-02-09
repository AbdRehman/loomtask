import React from 'react'

const AddRecords = ({main,setMain}) => {

  return (
    <div>
          {main?.map((item) => {
              return <>
                  <h2>{item.title}</h2>
                  {item.title == 'useParam' && item?.inputFeilds?.map((product) => {
                      return <div><label>{product.text}</label>
                          <input type={product.value} />
                      </div>
                  })}
              </>
          })}
    </div>
  )
}

export default AddRecords