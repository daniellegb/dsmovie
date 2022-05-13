package com.daniellegb.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniellegb.dsmovie.entities.Score;
import com.daniellegb.dsmovie.entities.User;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {
	
}
