import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalBody, ModalHeader, Form, Label, FormGroup, Input, Button
} from 'reactstrap';

function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        return (
            <>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}
export default class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentModal: false,
        };
    };
    setCommentModal = () => {
        this.setState({
            commentModal: !this.state.commentModal,
        })
    }
    handleSubmit = (e) => {
        this.setCommentModal();
        console.log(this.props.dish.id, this.rating.value, this.name.value, this.comment.value);
        this.props.addComment(this.props.dish.id, this.rating.value, this.name.value, this.comment.value);
    }
    render() {
        var dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} ></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <RenderComments comments={this.props.comments}
                            addComment={this.props.addComment}
                            dishId={this.props.dish.id}
                        />
                        <Button onClick={() => this.setCommentModal()}><span className="fa fa-pencil">Submit comment</span></Button>
                    </div>
                    <Modal isOpen={this.state.commentModal} toggle={() => this.setCommentModal()}>
                        <ModalHeader color="primary">Comment</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" innerRef={(name) => this.name = name}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="rating">Rating</Label>
                                    <Input type="select" name="rating" id="rating" innerRef={(rating) => this.rating = rating}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="comment">Comment</Label>
                                    <Input type="textarea" rows="8" name="comment" id="comment" innerRef={(comment) => this.comment = comment}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" value="Submit" color="primary" className="ml-auto">Submit</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}
