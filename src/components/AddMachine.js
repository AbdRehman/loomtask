import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
import {addCategory} from '../actions/index.js';

function AddMachine({ main, setMain }) {
    
const dispatch=useDispatch();
    const nameChange = (index, event) => {
        let data = [...main];
        data[index][event.target.name] = event.target.value;
        setMain(data);
    }

    const changeText = (index,key, event) => {
        let data = [...main];
        data[index].inputFeilds[key].text = event.target.value;
        setMain(data);
    }

    const add = (index, value) => {
        let data = [...main];
        data[index].inputFeilds.push(
            {value:value,text:""}
        );
        setMain(data);
    }
    const addRecord = () => {
        let arr = [...main];
        arr.push({ title: "", inputFeilds: [] })
        setMain(arr)
    }

    const deleteProduct =(key,index)=>{
        let item = [...main];
        item[index]?.inputFeilds?.splice(key,1);
        setMain(item);
    }


    const deleteType =(index)=>{
        let item = [...main];
        item.splice(index,1);
        setMain(item);
    }

    return <div>
        {main?.map((item, index) => {
            return <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{item?.title}</Form.Label>
                    <Form.Control name='title' type="text" placeholder="Category Name" onChange={(e) => nameChange(index, e)} />
                </Form.Group>

                {item?.inputFeilds?.map((product,key) => {
                    return <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='text' type="text" placeholder="Field" onChange={(e) => changeText(index,key,e) }/>
                    <p>{product.value}</p>
                    <span onClick={()=>deleteProduct(key,index)}>Delete</span>
                </Form.Group>
                })}


                <Button variant="danger" onClick={()=>deleteType(index)}>
                    Delete Category
                </Button>

                <Dropdown onSelect={(eventkey,event)=>add(index,eventkey)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add New Field
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="text">Text</Dropdown.Item>
        <Dropdown.Item eventKey="number">Number</Dropdown.Item>
        <Dropdown.Item eventKey="date">Date</Dropdown.Item>
        <Dropdown.Item eventKey="checkbox">CheckBox</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                {/* <Form.Select id="get-input-type">
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="checkbox">Checkbox</option>
                    </Form.Select>
                    <Button variant="primary" onClick={(e) => add(index, e)}>
                    Add Field
                </Button> */}

            </Form>

        })}
                <Button variant="primary" onClick={()=>dispatch(addCategory(main))}>
                    Add New Category
                </Button>
    </div>
}

export default AddMachine