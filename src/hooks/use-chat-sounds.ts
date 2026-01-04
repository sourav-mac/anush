import { useCallback, useRef } from 'react';

export const useChatSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSendSound = useCallback(() => {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Soft rising tone
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);

      // Quick fade in/out for subtle effect
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Audio not supported or blocked
    }
  }, [getAudioContext]);

  const playReceiveSound = useCallback(() => {
    try {
      const ctx = getAudioContext();
      
      // Two-tone notification sound
      const playTone = (freq: number, startTime: number) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, startTime);

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.06, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.12);
      };

      // Descending two-note chime
      playTone(800, ctx.currentTime);
      playTone(600, ctx.currentTime + 0.08);
    } catch (e) {
      // Audio not supported or blocked
    }
  }, [getAudioContext]);

  return { playSendSound, playReceiveSound };
};
