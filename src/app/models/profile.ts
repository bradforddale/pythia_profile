import {Award} from './award';
import {ClubPosition} from './clubPosition';
import {PersonalInfo} from './personalInfo';

export interface Profile {
    id: string;
    personalInfo: PersonalInfo,
    awardAchieveds: Award[];
    positions: ClubPosition[];
}