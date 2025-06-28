import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/User_Image';
import WALKING_USER from '@salesforce/resourceUrl/waking_user';

export default class StaticImages extends LightningElement {
userImage = USER_IMAGE;
walkingUser = WALKING_USER;
}