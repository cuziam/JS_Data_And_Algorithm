function solution(bandage, health, attacks) {
  const [castingSec, healPerSec, bonusHeal] = bandage;
  const maxHp = health;

  let prevAttackTime = 0;
  let hp = health;

  for (const [attackTime, damage] of attacks) {
    // 데미지를 입기 전 hp계산(주의 맨 처음 공격이전)
    const healTime = attackTime - prevAttackTime - 1;
    hp = hp + healTime * healPerSec + Math.floor(healTime / castingSec) * bonusHeal;
    hp = hp > maxHp ? maxHp : hp;
    // 데미지를 입을 때 hp 계산
    hp -= damage;
    prevAttackTime = attackTime;
    if (hp <= 0) return -1;
  }
  return hp;
}
