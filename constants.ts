
import { Question, MBTI_Dimension } from './types';

export const QUESTIONS: Question[] = [
  // E vs I
  {
    text: "A new dungeon has been discovered! Do you:",
    choices: [
      { text: "Form a party with other adventurers immediately!", type: 'E' },
      { text: "Scout the entrance solo to assess the danger first.", type: 'I' },
    ],
  },
  {
    text: "After a long day of questing, you recharge by:",
    choices: [
      { text: "Heading to the tavern to share tales of glory.", type: 'E' },
      { text: "Returning to your quiet room at the inn to rest.", type: 'I' },
    ],
  },
  {
    text: "When facing a giant boss, your strategy is to:",
    choices: [
      { text: "Shout commands and coordinate the attack with your team.", type: 'E' },
      { text: "Silently observe its patterns to find a weak point.", type: 'I' },
    ],
  },
  // S vs N
  {
    text: "You find an ancient treasure map. You focus on:",
    choices: [
      { text: "The clear, step-by-step path marked on it.", type: 'S' },
      { text: "The strange symbols in the corners that hint at a hidden meaning.", type: 'N' },
    ],
  },
  {
    text: "When learning a new magic spell, you prefer to:",
    choices: [
      { text: "Practice the exact wand movements and incantations shown in the scroll.", type: 'S' },
      { text: "Understand the underlying theory of how the magic works.", type: 'N' },
    ],
  },
  {
    text: "You arrive in a new pixelated kingdom. What do you notice first?",
    choices: [
      { text: "The specific details: the colors of the banners, the texture of the cobblestones.", type: 'S' },
      { text: "The overall atmosphere and the potential for future adventures.", type: 'N' },
    ],
  },
  // T vs F
  {
    text: "A fellow party member is caught in a trap! Your first instinct is to:",
    choices: [
      { text: "Logically analyze the trap's mechanism to disarm it efficiently.", type: 'T' },
      { text: "Comfort your friend and reassure them while thinking of a solution.", type: 'F' },
    ],
  },
  {
    text: "The king asks for your judgment on a captured goblin. You decide based on:",
    choices: [
      { text: "The laws of the kingdom and the goblin's actions.", type: 'T' },
      { text: "The goblin's circumstances and the impact on the community.", type: 'F' },
    ],
  },
  {
    text: "When choosing new armor, what's more important?",
    choices: [
      { text: "Its defensive stats and efficiency in combat.", type: 'T' },
      { text: "How it makes you feel and represents your heroic identity.", type: 'F' },
    ],
  },
  // J vs P
  {
    text: "You're about to embark on a grand quest. Do you:",
    choices: [
      { text: "Create a detailed plan with checkpoints and inventory lists.", type: 'J' },
      { text: "Just grab your sword and see where the adventure takes you.", type: 'P' },
    ],
  },
  {
    text: "Your quest log is:",
    choices: [
      { text: "Neatly organized, with completed quests checked off.", type: 'J' },
      { text: "A chaotic list of possibilities you might get to eventually.", type: 'P' },
    ],
  },
  {
    text: "An unexpected side quest appears. Your reaction is:",
    choices: [
      { text: "Worry that it will disrupt your main quest schedule.", type: 'J' },
      { text: "Excitement! A new, unplanned adventure awaits!", type: 'P' },
    ],
  },
];

export const INITIAL_ANSWERS = {
  E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
};
